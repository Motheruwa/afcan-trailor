import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
<div className='movie'>
      <img src={img_path+esti.info.poster_path} className='poster'></img>
    <div className='movie-details'>
        <div className='box'>
            <h4 className='title'>{esti.info.title}</h4>
            <p className='rating'>{esti.info.vote_average}</p>

        </div>
       <div className='overview'>
         <h1>overview</h1>
         {esti.info.overview}       </div>
    </div>
    </div>
    .movie{
    box-shadow: 0 5px 10px rgba(0,0,0,0.5) ;
    width: 250px;
    background-color: #e88e27;
    margin: 1rem;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

}
.movie .poster{
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.movie-details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.movie-details .box{
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.movie-details .title{
    width: 160px;
    text-align: center;
}
.movie-details .overview{
    position:absolute ;
    left: 0;
    bottom: 0;
    max-height: 100%;
    background-color: #e88e27;
    opacity: 0.9;
    color: white;
    box-sizing: border-box;
    padding: 1rem;
    transition: all 0.4s ease-in-out;
    overflow-y: auto;
    transform: translateY(101%);


}
.movie-details:hover .overview{
  transform: translateY(0%);

}
.rating{
    background-color:#bf6f13 ;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border: 1px solid #bf6f13;
    box-shadow: inset 0 5px 5px rgba(0,0,0,0.5) ;
    position: absolute;
    right: 5px;
    bottom: 5px;
}



</div>
