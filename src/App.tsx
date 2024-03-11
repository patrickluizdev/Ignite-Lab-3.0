import { Logo } from './components/Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';
import './styles/global.css';


export function App() {
  return (
    <div className='flex flex-col w-screen h-screen bg-gray-900 items-center justify-center text-gray-100  p-10'>
      <header className='flex flex-col items-center justify-center'>
        <Logo/>

        <Heading size='lg' className='mt-2'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400'>
          Faça o login e comece a usar!
        </Text>
      </header>
      
      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="Endereço de e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor='passowrd' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="passowrd"id="password" placeholder="******************" />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'> Lembrar de mim por 30 dias</Text>
        </label>
        <Button className='mt-4'>Entrar na Plataforma</Button>
      </form>

      <footer className='flex flex-col items-center gap-4  mt-8 max-w-sm'>
        <Text asChild size="sm" >
          <a href='#' className='text-gray-400 underline hover:text-gray-200'>
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href='#' className='text-gray-400 underline hover:text-gray-200'>
            Não possuí conta? Crie uma agora!
          </a>
        </Text>
      </footer>

    </div>
  )
}