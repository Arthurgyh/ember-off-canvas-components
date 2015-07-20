import Ember from 'ember';

/**
  To use this component in your app, add this to a template:
  ```handlebars
  {{#eoc-viewport}}
    {{#on-canvas}}
      {{#off-canvas-opener}}
        <i class="fa fa-bars"></i>
      {{/off-canvas-opener}}
    {{/on-canvas}}
    {{#off-canvas}}
      {{#off-canvas-closer}}
        <i class="fa fa-times"></i>
      {{/off-canvas-closer}}
    {{/off-canvas}}
  {{/eoc-viewport}}
  ```
*/
export default Ember.Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<eoc-viewport/>` elements.
    @property tagName
    @type String
  */
  tagName: 'eoc-viewport',

  classNames: ['eoc-viewport-default'],

  classNameBindings: ['active:off-canvas-expanded'],

  active: false,

  // Custom events

  toggleOffCanvas: function () {
    this.toggleProperty('active');
  },

  expandOffCanvas: function () {
    this.set('active', true);
  },

  collapseOffCanvas: function () {
    this.set('active', false);
  },

_initialize: Ember.on('init', function(){
    this.EventBus.subscribe('toggleOffCanvas', this, 'toggleOffCanvas');
    this.EventBus.subscribe('expandOffCanvas', this, 'expandOffCanvas');
    this.EventBus.subscribe('collapseOffCanvas', this, 'collapseOffCanvas');
  }),


  _teardown: Ember.on('willDestroyElement', function(){
    this.get('EventBus').unsubscribe('toggleOffCanvas');
    this.get('EventBus').unsubscribe('expandOffCanvas');
    this.get('EventBus').unsubscribe('collapseOffCanvas');
  })
  
});
