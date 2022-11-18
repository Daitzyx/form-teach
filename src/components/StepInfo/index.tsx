import { Grid, Items, Circle } from './styles'
import { stepsToEnroll } from '../../data/stepsToEnroll'

export const StepInfo = () => {
  return (
    <>
      <hr style={{ width: '100%', position: 'absolute', top: '340px' }} />
      <Grid>
        {stepsToEnroll.map((item) => (
          <Items key={item.title}>
            <img src={item.icon} alt="" />
            <Circle>
              <span>{item.step}</span>
            </Circle>
            <p>{item.title}</p>
          </Items>
        ))}
      </Grid>
    </>
  )
}
