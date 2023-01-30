import React from 'react';
import Adapter from '@cfaester/enzyme-adapter-react-18'
import Enzyme, { mount} from 'enzyme';
import { HEADER_ROW_NAMES, CUSTOMER_AGGREGATE_TABLE_HEADERS, HISTORY_HEADER_ROW_NAMES } from '../utils/Constants';
import TotalRewardsByCustomer from '../component/TotalRewardsByCustomer'
import { CUSTINFO, TOTALREWARDS } from './TestConstants'
import RewardTable from '../component/RewardsByMonthTable';

Enzyme.configure({ adapter: new Adapter() })

describe('Validate Total Rewards Table', () => {
  const cols = CUSTOMER_AGGREGATE_TABLE_HEADERS;
  const data = TOTALREWARDS;
  const container = mount(<TotalRewardsByCustomer rows={TOTALREWARDS}
    headers={CUSTOMER_AGGREGATE_TABLE_HEADERS}
  ></TotalRewardsByCustomer>);

  const table = container.find('table');
  const tbody = table.find('tbody');
  const rows = tbody.find('tr');

  it('Validate Total Rewards Table, header, body, rows', () => {
    expect(table).toHaveLength(1);

    const thead = table.find('thead');
    expect(thead).toHaveLength(1);
  
    const headers = thead.find('th');
    expect(headers).toHaveLength(cols.length);
  
    headers.forEach((th, idx) => {
      expect(th.render().text()).toEqual(cols[idx]);
    });

    expect(tbody).toHaveLength(1);

    expect(rows.length).toEqual(data.length);

  });

  it('Validate Total Rewards table data', () => {
    rows.forEach((tr, rowIndex) => {
      const cells = tr.find('td');
      expect(cells.length).toEqual(cols.length);
      expect(cells.at(0).text()).toEqual(data[rowIndex].name);
      expect(cells.at(1).text()).toEqual(data[rowIndex].rewardPoints.toString());
    });
  });

});

describe('Validate Monthly Rewards table', () => {
  const cols = HEADER_ROW_NAMES;
  const data = CUSTINFO;
  const container = mount(<RewardTable rows={data}
    headers={HEADER_ROW_NAMES}
    isSubComponentAvailable={true}
    subTableHeader={"Transaction History"}
    subTableLabels={HISTORY_HEADER_ROW_NAMES}
></RewardTable>);

  const table = container.find('table');
  const tbody = table.find('tbody');
  const rows = tbody.find('tr');

  it('Validte Monthly Rewards Table, header, body, rows', () => {
    expect(table).toHaveLength(1);
    const thead = table.find('thead');
    expect(thead).toHaveLength(1);

    const headers = thead.find('th');
    const colsIncludingIcon = cols.length + 1;
    expect(headers).toHaveLength(colsIncludingIcon);

    headers.forEach((th, idx) => {
      if(idx != 0) {
        expect(th.render().text()).toEqual(cols[idx-1]);
      }
    });

    expect(tbody).toHaveLength(1);
    expect(rows.length).toEqual(6);
  });

});