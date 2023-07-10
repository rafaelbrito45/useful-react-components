import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage(){

    return(
        <div>
            <div>
                <Button success rounded className="mb-5"> <GoBell/>Click</Button>
            </div>
            <div>
                <Button danger ><GoCloudDownload/> Buy now </Button>
            </div>
            <div>
                <Button warning >See more</Button>
            </div>
            <div>
                <Button secondary > <GoDatabase/> Hide Ads</Button>
            </div>
            <div>
                <Button primary >Something</Button>
            </div>
        </div>
    )
}

export default ButtonPage;