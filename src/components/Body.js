import sprite from '../icon/sprite.svg'

function Body() {
	return (
		<section className="body">
			<div className="body__header">
				<h2 className="title">
					<span className="title__text">Фронтенд</span>
					<button className="button-edit">
						<svg className="button-edit__svg" width="15px" height="15px">
							<use href={ sprite + "#edit" } />
						</svg>
					</button>
				</h2>
			</div>
			<div className="body__main">
				<ul className="todo-list">
					<li className="todo-list__item">
						<div className="todo-list__body">
							<span className="todo-list__check"></span>
							<div className="todo-list__text">Изучить JavaScript</div>
							<button className="todo-list__button">
								<svg className="todo-list__button-svg" width="11px" height="11px">
									<use href={ sprite + "#delite" } />
								</svg>
							</button>
						</div>
					</li>
				</ul>
			</div>
			<div className="body__footer">
				<button className="button button--todo">
					<span className="button__icon">
						<svg className="button__svg" width="14px" height="14px">
							<use href={ sprite + "#addIcon" } />
						</svg>
					</span>
					Новая задача
				</button>
			</div>
		</section>
	);
}

export default Body;