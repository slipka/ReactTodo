import sprite from '../icon/sprite.svg'
import data from '../data/data'

const mainItems = data.main_item

console.log(mainItems)

function AsideList() {
	return (
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
					{mainItems.map(item => (
						<li className="list__item">
							<button className={`list__button list__button--${item.circle} ${ item.active ? 'active' : ''}  `}>{ item.name }</button>
						</li>
					))}
				</ul> 
			</div>
		</aside>
	)
}

export default AsideList