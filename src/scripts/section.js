export class Section {
  constructor({ items, renderer }, container) {
    this._items = items,
      this._renderer = renderer,
      this._container = container//у меня это elements
  }
  additem(element) {//функция добавления dom в контейнер
    this._container.prepend(element)
  }
  renderer() {//обходим все обьекты и рендерим
    this._items.forEach((el) => {
      this._renderer(el)
    })

  }

}
