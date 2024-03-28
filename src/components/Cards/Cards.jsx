import Card from '../Card/Card';
import OrderFilter from '../OrderFilter/OrderFilter';
import style from '../Cards/Cards.module.css'
import logo from '../../assets/img/rmlogo.png'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Cards({characters, onClose}) {

   const location = useLocation();
   const filtered = useSelector(state => state.filtered)

   return (
      <div className={style.superContainer}>

         {location.pathname === '/home' && characters.length === 0 && <div className={style.spacer}></div>}
         {location.pathname === '/favorites' && characters.length === 0 && <div className={style.spacer}></div>}
         {location.pathname === '/favorites' && filtered.length === 0 && <OrderFilter filtered={characters}/>}
         <div className={characters.length === 0 ? style.logo : style.hidden}>
            <img className={style.logoimage} src={logo} alt='Rick & Morty Logo' />
            <h1 className={style.logotext}>Character Searching Engine</h1>
         </div>

         <div className={characters.length === 0 ? style.hidden : ''}>
            <div className={style.container}>
               {location.pathname === '/favorites' && <OrderFilter filtered={characters}/>}
               {
                  characters.map(char => (
                     <Card 
                        key={char.id}
                        id={char.id}
                        name={char.name ? char.name : ''}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin ? char.origin.name : ''}
                        image={char.image}
                        onClose={() => onClose(char.id)}
                     />
                  ))
               }
            </div>
         </div>
         
      </div>
   );
}