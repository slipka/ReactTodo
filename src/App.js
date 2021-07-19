import sprite from './icon/sprite.svg'


function App() {
  return (
    <main className="main">
			<aside className="aside">
				<div className="aside__wrapper">
					<button className="aside__button">
						<span className="aside__button-icon">
							<svg className="aside__button-svg" width="12px" height="10px">
								<use href={ sprite + "#todo" } />
							</svg>
						</span>
						Все задачи
					</button>
					<ul className="list">
						<li className="list__item">
							<button className="list__button">Покупки</button>
						</li>
						<li className="list__item"><button className="list__button">Фронтенд</button></li>
						<li className="list__item"><button className="list__button">Фильмы и сериа...</button></li>
						<li className="list__item"><button className="list__button">Книги</button></li>
						<li className="list__item"><button className="list__button">Личное</button></li>
					</ul>
				</div>
			</aside>
			<section className="body">body</section>
		</main>	
  );
}

export default App;
