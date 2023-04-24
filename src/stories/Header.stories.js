import MyHeader from './Header';

export default {
  title: 'Example/Header',
  component: MyHeader,
  parameters: {
   
    layout: 'fullscreen',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeader },
  template:
    '<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Leonardo J. Andrade',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
