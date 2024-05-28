import {Box, Typography} from '@mui/material'

export const NoData = () => {
  return (
    <Box
      width={'90%'}
      display={'flex'}
      flexDirection='column'
      gap={3}
      justifyContent={'center'}
    >
      <Box
        display={'flex'}
        paddingX={8}
        borderRadius={1}
        paddingY={1}
        minHeight={286}
        justifyContent={'center'}
        overflow={'auto'}
        textAlign={'center'}
        width={'100%'}
      >
        <Box display='flex' flexDirection='column' justifyContent='center'>
          <Typography fontSize={20} fontWeight={500} color={'grey.500'}>
            Sem dados para exibir
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
