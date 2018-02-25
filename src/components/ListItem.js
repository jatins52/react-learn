import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common/CardItem';
import * as actions from '../actions';


class ListItem extends Component {

    renderDescription(){
        console.log(this.props)
        const { library, expanded } = this.props;
        console.log('==='+expanded)
        if(expanded){
            return(
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardItem>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardItem>
                        {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded }
};

export default connect(mapStateToProps, actions)(ListItem);