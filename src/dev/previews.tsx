import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {NotFoundLayout} from "../components/layout/NotFoundLayout.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/NotFoundLayout">
                <NotFoundLayout/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;