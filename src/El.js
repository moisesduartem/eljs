const El = function (element, props, content) {

  this.element = element;
  this.props = props;
  this.content = content;

  this.createElement = function () {
    if (!(typeof this.element === 'object')) {
      this.element = document.createElement(this.element);
    }

    if (typeof content === 'object') {
      this.element.appendChild(this.content);
      return this.element;
    }

    const text = document.createTextNode(this.content);
    this.element.appendChild(text);
    return this.element;
  }

  return this.createElement();
};

export default El;