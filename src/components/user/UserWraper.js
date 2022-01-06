import classes from "./UserWraper.module.css"
const UserWraper = props =>{

    return (
        <div className={classes.wraper}>
            {props.children}
        </div>
    )
}
export default UserWraper;