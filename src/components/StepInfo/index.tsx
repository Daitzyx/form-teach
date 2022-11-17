import { Container, Grid, Circle } from './styles'
import { stepsToEnroll } from '../../data/stepsToEnroll'

export const StepInfo = () => {
  return (
    <div style={{ marginBottom: '130px' }}>
      <hr />
      <div style={{ position: `relative` }}>
        <Container>
          {stepsToEnroll.map((item) => (
            <Grid key={item.title}>
              <img src={item.icon} alt="" />
              <Circle>
                <span>{item.step}</span>
              </Circle>
              <p>{item.title}</p>
            </Grid>
          ))}
        </Container>
      </div>
    </div>
  )
}
