import KitPanel from "./kit-panel";
import './css/kit.css'

export function Kit(){
    return (
        <div className="Kit">
            <KitPanel />
            <KitPanel />
            <KitPanel />
            <KitPanel />
        </div>
    )
}

export default Kit