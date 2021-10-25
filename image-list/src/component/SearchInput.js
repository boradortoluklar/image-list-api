import React from 'react';

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state ={entry : '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }


       /* ya da onChange ={(event) => console.log(event.target.value)} bunu yazınca yukarıdaki callback fonsiyonu silinir 
    BU KONTROLSÜZ ELEMENT TİPİDİR.
    onChange={this.onInputChange}/> BU DA KONTROLLÜ ELEMENT TİPİ */
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                    <div className="ui massive icon input">
                        <input type="text" 
                        placeholder='search...'
                        onChange={(event) => this.setState({entry : event.target.value})}
                        value ={this.state.entry}
                    /> 
                    <i className="search icon"></i>
                    </div>
                </div>   
            </form>
        </div>
        )
    }
}
export default SearchInput;