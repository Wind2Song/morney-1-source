import cs from 'classnames';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

// 声明一个类型给props用。如下，表示name是个字符串类型
type Props = {
    name:string
} & React.SVGAttributes<SVGElement>
const Icon = (props:Props)=> {
    const {name, children, ...rest} = props;
    return(
        <svg className={cs('icon')} {...rest}>
            <use xlinkHref={'#' + props.name}/>
        </svg>
    );
};

export default Icon;