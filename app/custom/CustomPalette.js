export default class CustomPalette {
    constructor(create, elementFactory, palette, translate) {
      this.create = create;
      this.elementFactory = elementFactory;
      this.translate = translate;
  
      palette.registerProvider(this);
    }
  
    getPaletteEntries(element) {
      const {
        create,
        elementFactory,
        translate
      } = this;
  
      function createServiceTask(event) {
        const shape = elementFactory.createShape({ type: 'bpmn:ServiceTask' });
  
        create.start(event, shape);
      }

      // function createTest(event) {
      //   const shape = elementFactory.createShape({ type: 'bpmn:Test' });
  
      //   create.start(event, shape);
      // }
  
      return {
        'create.service-task': {
          group: 'activity',
          className: 'bpmn-icon-service-task',
          title: translate('Создать задачу вызова сервиса'),
          action: {
            dragstart: createServiceTask,
            click: createServiceTask
          }
        },
        // 'create.test': {
        //   group: 'activity',
        //   className: 'bpmn-icon-transaction',
        //   title: translate('Создать тестовый элемент'),
        //   action: {
        //     dragstart: createTest,
        //     click: createTest
        //   }
        // }
      }
    }
  }
  
  CustomPalette.$inject = [
    'create',
    'elementFactory',
    'palette',
    'translate'
  ];