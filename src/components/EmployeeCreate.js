import React, { Component } from 'react'
import { Picker } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component{

    onButtonPress(){
        const { name, phone, shift } = this.props

        this.props.employeeCreate({ name, phone, shift: shift || 'Senin' })
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane" 
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value: value })}                        
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="061-00000000"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value: value})}
                    />
                </CardSection>

                <CardSection>
                    <Picker
                        label="Shift"
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="Senin" value="Senin" />
                        <Picker.Item label="Selasa" value="Selasa" />
                        <Picker.Item label="Rabu" value="Rabu" />
                        <Picker.Item label="Kamis" value="Kamis" />
                        <Picker.Item label="Jumat" value="Jumat" />
                        <Picker.Item label="Sabtu" value="Sabtu" />
                        <Picker.Item label="Minggu" value="Minggu" />
                    </Picker>    
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm

    return { name, phone, shift }
}

export default connect( mapStateToProps, { 
    employeeUpdate, 
    employeeCreate 
}) (EmployeeCreate)