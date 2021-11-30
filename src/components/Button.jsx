import cn from "classnames";
const Button = ({ children, icon: Icon, variant = 'default', ...rest }) => <button
    {...rest}
    className={cn("items-center px-2 text-white",
        {
            "bg-neutral-2 w-full py-4": variant === "primary",
            "bg-neutral-5 w-full py-4 !justify-start": variant === "secondary",
        })}
>
    <div className={cn("flex items-center",
        {
            "text-white justify-center text-base": variant !== "secondary",
            "text-neutral-3 text-sm p-2": variant === "secondary"
        })}>
        {Icon && (
            <Icon className="h-6 w-5" />
        )}
        <p className={variant === "secondary" ? "ml-4" : ""}> {children}</p>
    </div >
</button >


export default Button;