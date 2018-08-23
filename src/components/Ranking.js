import React from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component{
    render(){
        const {category,ranking,error} = this.props;
        var content;
        if(error){
            content= <p>エラーが発生しました</p>;
        }else if(typeof ranking === 'undefined'){
            content =<p> 読み込み中 </p>
        }else{
            content=(
                <ol className='item-list'>
                    {
                        (ranking.map(item => (
                        <li key={`ranking-item-${item.code}`} className='item'>
                            <img alt={item.name} src={item.imageUrl}/>
                            <a href={item.url} target='_blank'>{item.name}</a>
                        </li>
                    )))
                }
                </ol>
            )
        };
        return(
            <div className="ranking-content">
                <h2 className='ranking-title'>{
                    typeof category !== "undefined"
                    ? `${category.name}のランキング`
                    : ""}
                </h2>
                {content}
            </div>
        )
    }
    componentWillMount(){
        this.props.onMount(this.props.categoryId);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.categoryId!==nextProps.categoryId){
            this.props.onUpdate(nextProps.categoryId);
        }
    }
}

Ranking.PropTypes={
    categoryId: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    ranking: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ),
    error: PropTypes.bool.isRequired
};

Ranking.defaultProps = {
    categoryId: "1"
}