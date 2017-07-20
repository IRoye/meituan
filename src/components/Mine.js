import React,{Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

class Mine extends Component {
    state = {
        index: 0,
        touchDelta: 0
    }
    style = {
         width : '200px',
         height: '200px',
    }
    handleTouchStart = (e) =>{
     this.startTime = new Date().getTime();
     let touch = e.targetTouches[0];
     this.startX = touch.pageX;

    }
    
    checkSwipe(absMove, duration){
/**
 * 
 *  移动的距离大于  10 px
 * 
 *  手指在屏幕上持续的时间 小于 0.3 s;
 *  
 * 
 */
        const threshold = 10;
        const allowedTime = 300;//移动的时间
        let isSwipe = absMove > threshold && duration < allowedTime ? true: false;
        return isSwipe;
    }

    handlePre(){
        if(this.state.index === 0) return;
        this.setState({
            index : this.state.index - 1
        })
        console.log('上一张');
    }
    handleNext(){
        if(this.state.index === 3) return;
         this.setState({
            index : this.state.index + 1
        })
        console.log('下一张')
    }
     handleTouchEnd = (e) =>{
     this.endTime = new Date().getTime();
     let startTime = this.startTime;

     let duration = this.endTime - startTime;

     let touch = e.changedTouches[0];
     let endX = touch.pageX;
     let startX  = this.startX;

     let absMove = Math.abs(startX - endX);
     if(this.checkSwipe(absMove, duration)  || absMove > this.state.slideWidth/2){
         if(startX > endX){
             this.handleNext();
         }else{
             this.handlePre();
         }
     }
     
     this.setState({
          touchDelta: 0
        })

     console.log('时间间距:', duration);
        
    }

    componentDidMount() {
        this.setState({
            // 不包括菜单栏、工具栏以及滚动条等的高度。
            slideWidth: window.innerWidth
        })
    }
     handleTouchMove = (e) =>{
     let touch = e.targetTouches[0];
    //这个不能再向右滑
     if(this.state.index === 0 && this.startX < touch.pageX) return;
    //不能再向左滑动。
     if(this.state.index === 3 && this.startX > touch.pageX) return;

     this.setState({
      touchDelta:  this.startX - touch.pageX
    })
        
    }
    render() {
        return (
            <div className='slider-wrap'>
            <div id='slider' onTouchStart = {this.handleTouchStart.bind(this)} 
                 onTouchEnd={this.handleTouchEnd.bind(this)} 
                 onTouchMove={this.handleTouchMove.bind(this)} style={{
                     transform: `translate3d(-${this.state.index * this.state.slideWidth + this.state.touchDelta}px,0, 0)`,
                     transition: 'all .4s ease-out'
                 }}>
                 <div  className='slide'>第一张</div>
                  <div  className='slide'>第二张</div>
                   <div  className='slide'>第三张</div>
                    <div  className='slide'>第四张</div>
            </div>
            </div>
        );
    }
}

export default withRouter(Mine);