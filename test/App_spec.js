import { renderComponent, expect } from './test_helper';
import App from '../src/App';

describe('App', () => {
  var component = null;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('has an add todo input', () => {
    expect(component.find('input')).to.exist
  });

  it('adds a todo when user hits enter', () => {
    component.find('input[name=\'add-todo\']').simulate('keyDown', {value: 'Get milk', key: 'Enter'})

    expect(component.find('li').last()).to.have.text('Get milk');
  })
});
