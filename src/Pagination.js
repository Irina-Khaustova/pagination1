import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { setMinusPage, setPlusPage, setSelectedPage} from "./store/slices/sliceSelectPage";

export default function Pagination (props) {

    const {numberOfpages, selectedPage}  = props;
    console.log(numberOfpages, selectedPage)
    const dispatch = useDispatch();
    const [arrayPages, setArrayPages] = useState([]);
    const [select, setSelect] = useState(selectedPage);
    const [classNameArrowLeft, setClassNameArrowLeft] = useState('move-left active');
    const [classNameArrowRight, setClassNameArrowRight] = useState('move-right active');

    useEffect(() => {
        let array =[]
        console.log(select)
       if(numberOfpages <= 5) {
        array = Array.from({length: numberOfpages}, (_, i) => ++i);
       }
       if(selectedPage <=3) {
        array = [2, 3]
       } else if (selectedPage >= numberOfpages -2){
        array = [numberOfpages-2, numberOfpages-1]
       } else {
        array = [selectedPage-1, selectedPage, selectedPage+1]
       console.log(selectedPage)
       }
      
       let newArr = array.map((el) => ({el: el, classname: Number(el) === selectedPage? 'pagination-page page-active' :  'pagination-page'}))
       setArrayPages(newArr)
       console.log(newArr)
       

    }, [selectedPage, numberOfpages]) 

    const handleClickLeft = () => {
        console.log(classNameArrowLeft, classNameArrowLeft)
        if (selectedPage < numberOfpages) {
            setClassNameArrowRight('move-right active')
        }
        if (selectedPage === 2) {
            setClassNameArrowLeft('move-left inactive');
        }
        if(selectedPage >= 2) { 
          dispatch(setMinusPage())
        } 
    }

    const handleClickRight = () => {
        if (selectedPage > 1) {
            setClassNameArrowLeft('move-left active')}

        if (selectedPage === numberOfpages - 1) {
            setClassNameArrowRight('move-right inactive');
        }
        if(selectedPage <= numberOfpages -1 ) { 
          dispatch(setPlusPage())
        } 
    }

    const handleClickPointsRight = () => {
        dispatch(setSelectedPage(selectedPage+2))
      }
    
    const handleClickPointsLeft = () => {
        dispatch(setSelectedPage(selectedPage-2))
      }

    const handleClickPage = (evt) => {
        console.log(evt.currentTarget.id)
        let page = evt.currentTarget.id
      dispatch(setSelectedPage(Number(page)))
    }
  
    return (
        <div className="pagination box">
            <button className={classNameArrowLeft} onClick={handleClickLeft}></button>
        <div className='pagination pagination-container'>
            <div className={selectedPage === 1? 'pagination-page page-active': 'pagination-page'} onClick={handleClickPage} id='1' >1</div>
            {selectedPage > 3 && numberOfpages > 5 && <div className="pagination-page" onClick={handleClickPointsLeft}><div>. . .</div></div>}
            {arrayPages.map((el, ind) => <div className={el.classname} key={el.el} id={el.el} onClick={handleClickPage} ><div>{el.el}</div></div>)}
            {selectedPage <= numberOfpages-3 && numberOfpages > 5 && <div className="pagination-page" onClick={handleClickPointsRight}><div>. . .</div></div>}
            <div className={selectedPage === Number(numberOfpages)? 'pagination-page page-active': 'pagination-page'} id={numberOfpages} onClick={handleClickPage}>{numberOfpages}</div>
        </div>
        <button className={classNameArrowRight} onClick={handleClickRight}></button>
        </div>
    )
}