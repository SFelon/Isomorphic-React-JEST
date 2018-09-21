import NotificationViewer from '../NotificationViewer';
import renderer from 'react-test-renderer';
import React from 'react';
import delay from 'redux-saga';

//Wskazujemy my przy tym tescie wykorzystac mocka podanego nizej serwisu.
//Serwis musi zostac wczesniej przez nas zmockowany w odpowiednim folderze __mocks__
jest.mock('../../services/NotificationService');

//Wykorzystanie klasy po wywołaniu funkcji jest.mock
const notificationService = require('../../services/NotificationService').default;

describe("The notification viewer", () => {
    beforeAll( () => {
        notificationService.__setCount(5);
    });

    it("should display the correct number of notifications", async ()=> {
        const tree = renderer.create(
            <NotificationViewer />
        )

        await delay();
        const instance = tree.root;
        const component = instance.findByProps({className:`notifications`});
        const text = component.children[0];
        expect(text).toEqual("5 Notifications");
    });
});