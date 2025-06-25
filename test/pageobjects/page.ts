import { $ } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {

    public get inputTodo() {
        return $('.new-todo');
    }

    public get completeTodo() {
        return $('input[type="checkbox"]');
    }

    public get addedTodo () {
        return $('li').$('div')
    }

    public get deleteTodo () {
        return $('button[class="destroy"]');
    }

    public async addTodo (todo: string) {
        await this.inputTodo.setValue(todo);
        await browser.keys('Enter');
    }


    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url('')
    }
}

export default new Page();