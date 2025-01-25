import { useTranslation } from "react-i18next"

const MyContainer = () => {

  const {t} = useTranslation();

  return (
    <div>
      <h1>{t("Frontpage")}</h1>
      
    </div>
  )
}

export default MyContainer