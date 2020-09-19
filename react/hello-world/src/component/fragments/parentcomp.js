import React, { PureComponent } from 'react';
import regcomp from './regcomp';

constructor(props)
 {
    super(props)

    this.state = {
         name: 'sameer'
    }
}
componentDidMount() 
{
    setInterval(()=>{
        this.setstate({
            name:'shivam'
        })
    }, 2000)
}

export class parentcomp extends PureComponent {
    render() {
        return (
            <div>
                parent component
                <RegComp name={this.state.name} />
                <PureComponent name={this.state.name} />
            </div>
        )
    }
}

export default parentcomp
