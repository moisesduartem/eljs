/**
 * [Cria elemento utilizando a API da DOM]
 * @param {*} element 
 * @param {*} content 
 */
const createElement = function (element, content) {
  if (!(typeof element === 'object')) {
    element = document.createElement(element);
  }

  if (typeof content === 'object') {
    element.appendChild(content);
    return element;
  }

  const text = document.createTextNode(content);
  element.appendChild(text);
  return element;
}

const El = function (element, content) {

  console.log(typeof content, content);

  this.element = element;
  this.content = content;

  return createElement(this.element, this.content);
};

export default El;