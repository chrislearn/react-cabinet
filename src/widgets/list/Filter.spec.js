import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';

import Filter from './Filter';

describe('<Filter />', () => {
    describe('With form context', () => {
        const defaultProps = {
            context: 'form',
            entityName: 'posts',
        };

        it('should render a redux <FilterForm /> component', () => {
            const wrapper = shallow(<Filter {...defaultProps} />);
            const form = wrapper.find('ReduxForm');
            assert.equal(form.length, 1);
        });

        it('should pass `filterValues` as `initialValues` props', () => {
            const wrapper = shallow(<Filter {...defaultProps} filterValues={{ q: 'Lorem' }} />);
            const form = wrapper.find('ReduxForm').first();
            assert.deepEqual(form.prop('initialValues'), { q: 'Lorem' });
        });
    });
});
