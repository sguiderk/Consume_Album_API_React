configure({ adapter: new Adapter() });
import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App  from '../components/App';
import AlbumsList from '../components/AlbumsList';
import PhotosList from '../components/PhotosList';
import { AnchorLink } from '../components/Link'
import { Page } from '../components/Page';
import store from 'redux/storeConfig';
import { Provider } from 'react-redux';


describe('creaction of component AlbumsList,PhotosList,List,AnchorLink and Page', () => {

    it('component App created', () => {
        const renderedComponent = shallow(<App />);
        expect(renderedComponent).toMatchSnapshot();
    });
    it('component AlbumsList created', () => {
        const renderedComponent = shallow(<AlbumsList />);
        expect(renderedComponent).toMatchSnapshot();
    });
    it('component PhotosList created', () => {
        const renderedComponent = shallow(<PhotosList />);
        expect(renderedComponent).toMatchSnapshot();
    });
    it('component AnchorLink created', () => {
        const renderedComponent = shallow(<AnchorLink />);
        expect(renderedComponent).toMatchSnapshot();
    });
    it('component Page created', () => {
        const renderedComponent = shallow(<Page />);
        expect(renderedComponent).toMatchSnapshot();
    });


})


describe('App contains AlbumsList,PhotosList,List,AnchorLink and Page', () => {
    it('App contains Header', function() {
        expect(shallow(<App />).contains(<AlbumsList/>)).toMatchSnapshot();
    });
    it('App contains PhotosList', function() {
        expect(shallow(<App />).contains(<PhotosList/>)).toMatchSnapshot();
    });
    it('App contains PhotosList', function() {
        expect(shallow(<App />).contains(<PhotosList/>)).toMatchSnapshot();
    });
    it('App contains Page', function() {
        expect(shallow(<App />).contains(<Page/>)).toMatchSnapshot();
    });
    it('App contains AnchorLink', function() {
        expect(shallow(<App />).contains(<AnchorLink/>)).toMatchSnapshot();
    });
})

describe('Has Title created Album App', () => {

    it('Title created', () => {
        const component = mount(<Provider store={store}>
            <App/>
        </Provider>);

        expect(component.find("h1").text()).toEqual("Album App");
    });

})


describe('Has header List of album', () => {

    it('header created', () => {
        const component = mount(<Provider store={store}>
            <AlbumsList/>
        </Provider>);

        expect(component.find("header").text()).toEqual("List of album");
    });

})

describe('Check state of AlbumsList is empty', () => {

    it('state of AlbumsList is empty', () => {

        const cmp = shallow(<Provider store={store}>
            <AlbumsList />
        </Provider>);

        expect(cmp.state().storeState.albums).toEqual([]);

    });

})


describe('Check state of PhotosList is empty', () => {

    it('state of PhotosList is empty', () => {

        const cmp = mount(<Provider store={store}>
            <AlbumsList />
        </Provider>);

        expect(cmp.state().storeState.photos).toEqual(undefined);
    });

})
