import React, { Component } from 'react';
import { defaultRanges, Calendar, DateRange } from '../../../lib';
import Section from 'components/Section';

import 'normalize.css';
import 'styles/global'
import styles from 'styles/main';

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      'rangePicker' : {
        startDate: '13/08/2016',
        endDate: '09/10/2016'
      },
      'linked' : {},
      'datePicker' : null,
      'firstDayOfWeek' : null,
      'predefined' : {},
    }
  }

  handleChange(which, payload) {
  }

  handleInputChange(field, e) {
    const newState = this.state;
    newState.rangePicker[field] = e.target.value;
    this.setState(newState);
  }

  render() {
    const { rangePicker, linked, datePicker, firstDayOfWeek, predefined} = this.state;
    const format = 'dddd, D MMMM YYYY';

    return (
      <main className={styles['Main']}>

        <h1 className={styles['Title']}>React-date-range</h1>

        <Section title='Range Picker'>
          <div>
            <input
              type='text'              
              value={ rangePicker['startDate'] }
              onChange={ this.handleInputChange.bind(this, 'startDate') }
            />
            <input
              type='text'              
              value={ rangePicker['endDate'] }
              onChange={ this.handleInputChange.bind(this, 'endDate') }
            />
          </div>

          <DateRange
            startDate={ rangePicker['startDate'] }
            endDate={ rangePicker['endDate'] }
            theme={{              
              Calendar: {
                width: '230px'
              },
              Day: {                
                marginTop: '2px',
                marginBottom: '2px'
              },
              DayStartEdge: {                
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              },
              DayInRangeFirstOfRow: {                
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px'
              },
              DayEndEdge: {
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px'
              },
              DayInRangeLastOfRow: {                
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px'
              },
              DayInRange: {                
              },
            }}
            onInit={ this.handleChange.bind(this, 'rangePicker') }
            onChange={ this.handleChange.bind(this, 'rangePicker') }
          />
        </Section>
      </main>
    )
  }
}
