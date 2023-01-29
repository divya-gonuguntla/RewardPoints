import React from 'react';
import App from '../App';
import Adapter from '@cfaester/enzyme-adapter-react-18'
import Enzyme, { mount } from 'enzyme';
import { CUSTOMER_AGGREGATE_TABLE_HEADERS } from '../utils/Constants';
import TotalRewardsByCustomer from '../component/TotalRewardsByCustomer'
import { TOTALREWARDS } from './TestConstants'

Enzyme.configure({ adapter: new Adapter() })

describe('App rendered successfully with two tables', () => {
  it('should have two tables"', () => {
    const wrapper = mount(<App />);
    const table = wrapper.find('table');
    expect(table).toHaveLength(2);
  });
});

it('Renders Customer Rewards Table', () => {
  const cols = CUSTOMER_AGGREGATE_TABLE_HEADERS;
  const data = TOTALREWARDS;
  const container = mount(<TotalRewardsByCustomer rows={TOTALREWARDS}
    headers={CUSTOMER_AGGREGATE_TABLE_HEADERS}
  ></TotalRewardsByCustomer>);

  const table = container.find('table');
  expect(table).toHaveLength(1);

  const thead = table.find('thead');
  expect(thead).toHaveLength(1);

  const headers = thead.find('th');
  expect(headers).toHaveLength(cols.length);

  headers.forEach((th, idx) => {
    expect(th.render().text()).toEqual(cols[idx]);
  });

  const tbody = table.find('tbody');
  expect(tbody).toHaveLength(1);

  const rows = tbody.find('tr');
  expect(rows.length).toEqual(data.length);

  rows.forEach((tr, rowIndex) => {
    const cells = tr.find('td');
    expect(cells.length).toEqual(cols.length);
    expect(cells.at(0).text()).toEqual(data[rowIndex].name);
    expect(cells.at(1).text()).toEqual(data[rowIndex].rewardPoints.toString());
  });

});