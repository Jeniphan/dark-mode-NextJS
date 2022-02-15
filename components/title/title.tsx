import { useAppContext } from 'hooks/context';
import { useContext, useState } from 'react';
import Switch from 'react-switch';



const Title = () => {
  const context = useAppContext();
  const [check, setCheck] = useState<boolean>(false)

  const toggleSwitch = (checked: boolean) => {
    setCheck(checked);
    checked ? context.setTheme('dark') : context.setTheme('light');
  }

  return (
    <header className={context.theme}>
      <span className="spanhead">
        Mode[{context.theme}]
      </span>
      <Switch
        onChange={(e) => toggleSwitch(e)}
        checked={check}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={'#ffa500'}
      />
    </header>
  )
}

export default Title;