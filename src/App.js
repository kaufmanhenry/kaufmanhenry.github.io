import React from 'react'
import styled from 'styled-components'

import repos from '../repos'

const Wrapper = styled.div`
  padding: 64px;
  font-family: sans-serif;
  @media (max-width: 40em) {
    padding: 16px;
  }
`

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Repo = styled.div`
  padding: 5px 15px;
  font-size: 48px;
  font-weight: bold;
  a {
    color: #aaa;
    text-decoration: none;
    &:hover {
      color: #28f;
    }
  }
  @media (max-width: 40em) {
    font-size: 20px;
    padding: 5px;
  }
`

const App = () => {
  return (
    <Wrapper>
      <FlexWrap>
        {repos && repos.map(r => (
          <Repo key={r.id}>
            <a href={r.html_url}>{r.name}</a>
          </Repo>
        ))}
      </FlexWrap>
      <br />
      <br />
      <br />
      <Repo><a href="https://twitter.com/kaufmanhenry">twitter</a></Repo>
      <Repo><a href="https://github.com/hcjk">github</a></Repo>
    </Wrapper>
  )
}

export default App
