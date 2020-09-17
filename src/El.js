/**
 * [Cria elemento utilizando a API da DOM]
 * @param {*} element 
 * @param {*} content 
 */
var createElement = function (element, content) {

  if (!(typeof element === 'object')) {
    element = document.createElement(element);
  }

  if (Array.isArray(content)) {
    content.forEach((el) => {
      element.appendChild(el);
    })
    return element;
  }

  if (typeof content === 'object') {
    element.appendChild(content);
    return element;
  }

  const text = document.createTextNode(content);
  element.appendChild(text);
  return element;
};

/**
 * [Objeto responsável por executar as funções da lib.]
 * @param {*} element 
 * @param {*} content 
 */
const El = function (element, content) {

  console.log(typeof content, content);

  this.element = element;
  this.content = content;

  return createElement(this.element, this.content);
};

export default El;