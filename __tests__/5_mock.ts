import { fetchData } from '../app/utils/fetchData';

// mock fetch
jest.mock('../app/utils/fetchData', () => ({
  fetchData: jest.fn(),
}));

// assert fetchData as jest.Mock
const mockedFetchData = fetchData as jest.Mock;

test('should mock fetchData', async () => {
  mockedFetchData.mockResolvedValue({ data: 'mocked data' });
  
  const data = await fetchData();
  
  expect(data).toEqual({ data: 'mocked data' });
  expect(mockedFetchData).toHaveBeenCalledTimes(1);
});