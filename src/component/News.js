import React, { Component } from 'react'
import { Card, Container, Row, Button,Badge } from 'react-bootstrap';
import Spiner from './Spiner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {

    capitalizedLetter = (String) => {
        return String.charAt(0).toUpperCase() + String.slice(1);
    }
    constructor(props)
    {
        super(props);
        this.state = {
            articles: [], 
            loading : true,
            page:1,   
            totalResults:0       
        }
        document.title = `${this.capitalizedLetter(this.props.category)} - NewsMonkey App`
    }

    async updateNews () {
         this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=991f660489604814b04ee9cff7bbea91&&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading : true,
        })
        
        this.props.setProgress(30)
        let data = await fetch(url);
       
        this.props.setProgress(70)
        let parseData = await data.json();
        console.log(parseData);
     

        this.setState({articles : parseData.articles ,totalResults: parseData.length, loading : false,
        } )
        this.props.setProgress(100)
        // if((this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)))
        // {
        //   this.setState({loading:false})
        // }
        
    }
    async componentDidMount()
    {
       this.updateNews();
    }
    // prevHandler = async () =>{
        
    //     this.setState({page: this.state.page - 1})
    //     this.updateNews();
    // }  
    // nextHandler = async () =>
    // {
    //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    //    {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=991f660489604814b04ee9cff7bbea91&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({
    //             loading : true,
    //         })
    //         let data = await fetch(url);
    //         let parseData = await data.json();
    //         console.log(parseData);
    //         this.setState({
    //             articles : parseData.articles,
    //             page: this.state.page + 1,
    //             loading : false
    //         })
    //     }

    // this.setState({page: this.state.page + 1})
    // this.updateNews();
    // }
    fetchMoreData = async () => {
      // this.props.setProgress(0)
    this.setState({page: this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=991f660489604814b04ee9cff7bbea91&&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      // this.props.setProgress(30)
      let data = await fetch(url);
        let parseData = await data.json();
        // this.props.setProgress(60)
        console.log(parseData);
        this.setState({articles : this.state.articles.concat(parseData.articles) ,totalResults: parseData.totalResults
        } )
        // this.props.setProgress(100)
        // console.log(this.state.Loader)
      //  if(parseData.totalResults < this.state.articles)
      //  {
      //   this.setState({ loading : false
      //   } )
      //  }
     };

  render() {
    return (
      <div>
        
        <Container>
            <h2 className='mt-4 mb-3 text-center text-dark'>NewsMonkey - Daily News Top headlines From <span className='text-danger'>{this.capitalizedLetter(this.props.category)}</span></h2>
            {/* {this.state.Loader && <Spiner/>} */}
            {this.state.loading && <Spiner />}
          {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner/>}
           style={{overflow:"hidden"}}
        > */}

<InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spiner/>}
                    style={{overflow:"hidden"}}
                > 

          <div className='container'>
      
            {/* {!this.state.Loader &&  */}
            <Row>
                {
                    this.state.articles.map((item,index) => {
                        return (
                            <Card className='m-2 p-0 mb-3'  style={{ width: '15.5rem' }} key={index} >
                                 <Badge pill bg="primary" className='sorce'>{item.source.name.slice(0,20)}</Badge>
                            <Card.Img variant="top" src={item.urlToImage?item.urlToImage:'https://cdn.ndtv.com/common/images/ogndtv.png'} className="imgcard" />
                            <Card.Body>
                              <Card.Title>{item.title?item.title.slice(0,30):""}</Card.Title>
                              <Card.Text className='mb-2'>
                               {item.description?item.description.slice(0,70):"NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News"}
                              </Card.Text>
                              <Card.Text className='pt-0'>
                                <p className='text-muted' style={{fontSize:'12px'}} >By {!item.author? 'unknowe' : item.author}<br/> on {new Date(item.publishedAt).toGMTString()}</p>
                              </Card.Text>
                              <Card.Text className='text-center'>
                              <Button variant="primary" target='_blank' href={item.url} >Read more</Button>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                    )})
                }
            </Row>
            </div>
                  </InfiniteScroll> 
            {/* <Row>
                <Col sm={12} className='pt-3 pb-5 d-flex justify-content-between'>
                    <Button disabled={this.state.page <=1 } className='btn btn-danger px4' onClick={this.prevHandler} >❮ Previous</Button>
                    <Button className='btn btn-danger px-4' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextHandler} >Next ❯</Button>
                </Col>
            </Row> */}
        </Container>

      </div>
    )
  }
}
