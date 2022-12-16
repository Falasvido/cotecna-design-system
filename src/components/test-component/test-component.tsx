import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.scss',
  shadow: true,
})
export class TestComponent {

  render() {
    return <div>Hello, World! I'm test-component!</div>;
  }

}
