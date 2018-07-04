import * as React from 'react';
import {mount} from 'enzyme';
import {reactRename} from '../src';

describe('Specs', () => {

  it('Dupe Check RFC', () => {
    const F1:React.SFC<{id:number}> = ({id}) => <div>42{id}</div>;
    const F2 = reactRename(F1, 'F1`');

    expect(F2.length).toEqual(F1.length);
    expect((F2 as any).name).toEqual('F1`');

    expect(mount(<div><F1 id={1}/><F2 id={2}/></div>)).toMatchSnapshot();
  });

  it.only('Dupe Check Classes', () => {
    const spy = jest.fn();

    class F1 extends React.Component<{ id: number }> {
      componentDidMount() {
        spy();
      }

      render() {
        return <div>42{this.props.id}</div>;
      }
    }

    const F2 = reactRename(F1, 'F1`');

    expect((F2 as any).name).toEqual('F1`');
    mount(<div><F1 id={1}/></div>);
    mount(<div><F2 id={2}/></div>);

    expect(mount(<div><F1 id={1}/><F2 id={2}/></div>)).toMatchSnapshot();
  });
});
