import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
// create fake dom that can be ran from terminal
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// create fake window
global.window = global.document.defaultView;

// create our own instance of jquery that will use our fake dom instead of trying to
// reach out for a real dom that isn't there.
const $ = jquery(global.window);
// this returns an instance of jquery that uses global.window for the dom

// build renderComponent helper - it will render a given component, render it, get html
// wrap it in jquery and return the jquery wrapped element
function renderComponent(Component) {
  // use React TestUtil renderIntoDocument to render componenet into a detached
  // DOM node. This will take the component we pass into it and render it in
  // the fake dom we've created above with jsdom
  const component = TestUtils.renderIntoDocument(<Component />);

  // grabs html of our component
  const domNode = ReactDOM.findDOMNode(component);

  // wrap domNode with jquery
  return $(domNode)
}

// helper for simulating events. fn.simulate gives each jquery instance access
// to simulate function ex; ('div').simulate(event, value)
$.fn.simulate = function(eventName, options) {
  // here were accessing TestUtils.Simulate which allows you to simulate a DOM
  // event for a given node and pass in optional data. In our case we want to
  // dynamically select the event so we access Simulate's properties with brackets
  // then was pass it "this" which is the jquery dom node (ex: 'div')
  this.val(options.value);
  TestUtils.Simulate[eventName](this[0], {key: options.key});
}


// setup chaiJquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
