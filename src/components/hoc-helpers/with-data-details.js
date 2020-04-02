import React, { Component } from 'react'
import Spinner from '../spinner'
import ErrorBoundry from '../error-boundry'
import ItemDetails, { Record } from '../item-details'
import SwapiService from '../../services/swapi-service'



const withDataDetails = (itemId, getData, getImageUrl) => {
    //itemId
    //getPerson
    //getPersonImage
    return class extends Component {
    
    state = {
        item: null,
        image: null,
        loading: true
    }

    componentDidMount(){
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {//critical!!!
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            image: getImageUrl(item),
            loading: false
        })
    }

    updateItem() {
        if (!itemId) {
            return
        }
        getData(itemId)
            .then(this.onItemLoaded)
    }

        render(){
            
            const { loading, image, item } = this.state
            if (!this.state.item) {
                return <span>Select a person from a list</span>
            }

            if (loading) {
                return <Spinner />
            }

            return (
                <ErrorBoundry>
                    <ItemDetails 
                        {...this.props} 
                        item={ item } 
                        image={image}>
                        <Record field="gender" label="Gender" />
                        <Record field="eyeColor" label="Eye color" />
                        <Record field="birthYear" label="Birth Year" />
                    </ItemDetails>
                </ErrorBoundry>
            )
            
        }
    }
}

export default withDataDetails