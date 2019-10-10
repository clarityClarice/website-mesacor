import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/Home'
import Produtos from '../components/Produtos/Produtos'
import Sobre from '../components/Sobre/Sobre'
import Contato from '../components/Contato/Contato'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/produtos' component={Produtos} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/contato' component={Contato} />
        <Redirect from="*" to='/' />
    </Switch>