
import './css/kit-panel.css'
import KitDesc from './kit-desc'
import KitPanelImage from './kit-panel-image'

export function KitPanel(){
    return (
        <div className='KitPanel'>
            <KitPanelImage />
            <KitDesc />
        </div>
    )
}

export default KitPanel