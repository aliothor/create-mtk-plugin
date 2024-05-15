import * as maptalks from 'maptalks'

const options = {
    'position': 'top-right',
    'content': 'My Control'
};

export default class MyControl extends maptalks.control.Control {
    buildOn(map) {
        const dom = document.createElement('div');
        dom.className = 'my-control';
        dom.innerText = this.options.content;
        return dom;
    }

    onAdd() {
        console.log('added');
    }

    onRemove() {
        console.log('removeed');
    }
}

MyControl.mergeOptions(options);