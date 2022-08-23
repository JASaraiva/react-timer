import { HistoryContainer, HistoryList, HistoryStatus } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>aaaaaaaaa</td>
              <td>bbbbbb</td>
              <td>cccccc</td>
              <td>
                <HistoryStatus statusColor="green">Concluído</HistoryStatus>
              </td>
            </tr>
            <tr>
              <td>aaaaaaaaa</td>
              <td>bbbbbb</td>
              <td>cccccc</td>
              <td>
                <HistoryStatus statusColor="green">Concluído</HistoryStatus>
              </td>
            </tr>
            <tr>
              <td>aaaaaaaaa</td>
              <td>bbbbbb</td>
              <td>cccccc</td>
              <td>
                <HistoryStatus statusColor="green">Concluído</HistoryStatus>
              </td>
            </tr>
            <tr>
              <td>aaaaaaaaa</td>
              <td>bbbbbb</td>
              <td>cccccc</td>
              <td>
                <HistoryStatus statusColor="green">Concluído</HistoryStatus>
              </td>
            </tr>
            <tr>
              <td>aaaaaaaaa</td>
              <td>bbbbbb</td>
              <td>cccccc</td>
              <td>
                <HistoryStatus statusColor="green">Concluído</HistoryStatus>
              </td>
            </tr>
            <tr>
              <td>aaaaaaaaa</td>
              <td>bbbbbb</td>
              <td>cccccc</td>
              <td>
                <HistoryStatus statusColor="yellow">Em Andamento</HistoryStatus>
              </td>
            </tr>
            <tr>
              <td>aaaaaaaaa</td>
              <td>bbbbbb</td>
              <td>cccccc</td>
              <td>
                <HistoryStatus statusColor="red">Interrompido</HistoryStatus>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
