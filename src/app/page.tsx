import theme from '@/theme/Theme';
import styles from './page.module.css';
import { Button, ConfigProvider } from 'antd';

export default function Home() {
  return (
    <main className={styles.main}>
      <ConfigProvider theme={theme}>
        <Button type='primary'>Um botao</Button>
      </ConfigProvider>
    </main>
  )
}
