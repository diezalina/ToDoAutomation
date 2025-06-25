import { expect } from '@wdio/globals'
import Page from '../pageobjects/page.js'

describe('My todo application', () => {
    it('should create a new ToDo task', async () => {
        await Page.open()
        await Page.addTodo('Lorem Ipsum')
        await expect(Page.addedTodo).toBeExisting()
    })
    it('should mark a ToDo task as complete', async () => {
        await Page.addedTodo.click()
        await expect(Page.addedTodo).toHaveText('Lorem Ipsum')
    })
    it('should delete a ToDo task', async () => {
        await (Page.deleteTodo).click()
        await expect(Page.addedTodo).not.toBeExisting()
    })
})
