export default function LanguageSelector(){
    return(
        <div className="absolute right-10 appearance-none">
            <select>
                <option value={"icon"}> 🌐</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
            </select>
        </div>
    )
}